/**
 * FormatConverter
 *
 * Handles writing Profile XML files to disk.
 * Writes in Salesforce DX Source format (.profile-meta.xml).
 */
/**
 * Write a Profile XML string to disk in Source format.
 *
 * @param profileName - The API name of the profile (e.g. "Admin").
 * @param xml - The profile XML content.
 * @param outputDir - The directory to write to.
 * @returns The absolute path of the written file.
 */
export declare function writeProfileToSourceFormat(profileName: string, xml: string, outputDir: string): string;
//# sourceMappingURL=formatConverter.d.ts.map