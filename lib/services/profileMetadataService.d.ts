/**
 * ProfileMetadataService
 *
 * Wraps the Metadata API readMetadata() call with batching logic.
 * The readMetadata API is limited to 10 records per call, so this service
 * automatically chunks larger requests.
 */
import { Connection } from '@salesforce/core';
export interface RetrievedProfile {
    /** Profile API name. */
    fullName: string;
    /** Full XML string for this profile. */
    xml: string;
}
/**
 * Retrieve full Profile metadata using readMetadata().
 *
 * @param connection - An authenticated Salesforce Connection.
 * @param profileNames - Array of profile fullNames to retrieve.
 * @returns Array of RetrievedProfile objects.
 */
export declare function retrieveProfiles(connection: Connection, profileNames: string[]): Promise<RetrievedProfile[]>;
//# sourceMappingURL=profileMetadataService.d.ts.map