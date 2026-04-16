/**
 * ProfileCleaner
 *
 * Strips non-portable elements from Profile XML so the metadata
 * can be safely moved between different org types (sandbox ↔ production).
 */
import { CleanOptions } from '../types/profileTypes.js';
/**
 * Clean a Profile XML string by removing non-portable elements.
 *
 * @param xml - The raw Profile XML string.
 * @param options - Which elements to remove (defaults to all non-portable).
 * @returns The cleaned XML string.
 */
export declare function cleanProfileXml(xml: string, options?: CleanOptions): string;
//# sourceMappingURL=profileCleaner.d.ts.map