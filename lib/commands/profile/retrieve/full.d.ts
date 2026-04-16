/**
 * sf profile retrieve full
 *
 * Retrieves full Profile metadata using the Metadata API readMetadata() call,
 * bypassing the standard retrieve's "sparse" behavior.
 */
import { SfCommand } from '@salesforce/sf-plugins-core';
import { Org } from '@salesforce/core';
import { ProfileRetrieveFullResult } from '../../../types/profileTypes.js';
export default class ProfileRetrieveFull extends SfCommand<ProfileRetrieveFullResult> {
    static readonly summary: string;
    static readonly description: string;
    static readonly examples: string[];
    static readonly flags: {
        name: import("@oclif/core/interfaces").OptionFlag<string[] | undefined, import("@oclif/core/interfaces").CustomOptions>;
        sourcedir: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        all: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'target-org': import("@oclif/core/interfaces").OptionFlag<Org, import("@oclif/core/interfaces").CustomOptions>;
        'output-dir': import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        clean: import("@oclif/core/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<ProfileRetrieveFullResult>;
    /**
     * Scan a directory for .profile-meta.xml files and return their profile names.
     */
    private getProfileNamesFromDir;
}
//# sourceMappingURL=full.d.ts.map