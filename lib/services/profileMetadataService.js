/**
 * ProfileMetadataService
 *
 * Wraps the Metadata API readMetadata() call with batching logic.
 * The readMetadata API is limited to 10 records per call, so this service
 * automatically chunks larger requests.
 */
import { XMLBuilder } from 'fast-xml-parser';
const BATCH_SIZE = 10;
const XML_DECLARATION = '<?xml version="1.0" encoding="UTF-8"?>\n';
const PROFILE_XMLNS = 'http://soap.sforce.com/2006/04/metadata';
/**
 * Retrieve full Profile metadata using readMetadata().
 *
 * @param connection - An authenticated Salesforce Connection.
 * @param profileNames - Array of profile fullNames to retrieve.
 * @returns Array of RetrievedProfile objects.
 */
export async function retrieveProfiles(connection, profileNames) {
    const results = [];
    const batches = chunkArray(profileNames, BATCH_SIZE);
    for (const batch of batches) {
        // readMetadata returns a single object for 1 item, or an array for multiple.
        const raw = await connection.metadata.read('Profile', batch);
        const items = Array.isArray(raw) ? raw : [raw];
        for (const item of items) {
            if (!item || !item.fullName) {
                continue;
            }
            const xml = buildProfileXml(item);
            results.push({
                fullName: item.fullName,
                xml,
            });
        }
    }
    return results;
}
/**
 * Convert a readMetadata result object into Metadata API XML.
 */
function buildProfileXml(profile) {
    // Remove the '$' key that jsforce adds for SOAP attributes
    const cleaned = removeMetaKeys(profile);
    const builder = new XMLBuilder({
        ignoreAttributes: false,
        format: true,
        indentBy: '    ',
        suppressEmptyNode: false,
        suppressBooleanAttributes: false,
    });
    // Remove 'fullName' from the XML body — it's metadata, not part of the Profile XML schema
    const { fullName, ...profileBody } = cleaned;
    const wrapped = {
        Profile: {
            '@_xmlns': PROFILE_XMLNS,
            ...profileBody,
        },
    };
    return XML_DECLARATION + builder.build(wrapped);
}
/**
 * Recursively remove jsforce metadata keys ('$', 'type') from objects.
 */
function removeMetaKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map((item) => removeMetaKeys(item));
    }
    if (obj !== null && typeof obj === 'object') {
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            if (key === '$' || key === 'type')
                continue;
            result[key] = removeMetaKeys(value);
        }
        return result;
    }
    return obj;
}
/**
 * Split an array into chunks of the given size.
 */
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
//# sourceMappingURL=profileMetadataService.js.map