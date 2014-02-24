{"keys": ["block", "dataset", "run", "file"], "urn": "blocks", "system": "dbs3", "members": ["block.nfiles", "block.name", "block.creation_time", "qhash", "block.block_id", "block.modification_time", "block.dataset_id", "block.modified_by", "block.origin_site_name", "block.open_for_writing", "block.size", "block.dataset", "block.created_by"]}
{"keys": ["block", "dataset", "site", "site"], "urn": "blockReplicas", "system": "phedex", "members": ["block.nfiles", "block.replica.subscribed", "block.replica.complete", "block.replica.node_id", "block.replica.group", "block.replica.nfiles", "block.size", "block.replica.site", "block.is_open", "block.name", "qhash", "block.replica.size", "block.id", "block.dataset", "block.replica.se", "block.replica.creation_time", "block.replica.modification_time", "block.replica.custodial"]}
{"keys": ["block", "dataset"], "urn": "listBlocks", "system": "dbs", "members": ["block.name", "block.nfiles", "block.creation_time", "qhash", "block.last_modified_by", "block.modification_time", "block.id", "block.dataset", "block.size", "block.site.se", "block.created_by", "block.nevents", "block.open_for_writing"]}
{"keys": ["dataset", "block", "primary_dataset", "tier", "release", "run", "file", "era", "group", "status", "date", "user"], "urn": "datasets", "system": "dbs3", "members": ["dataset.creation_time", "dataset.data_tier_name", "dataset.prep_id", "dataset.status", "dataset.name", "dataset.dataset_id", "dataset.modified_by", "dataset.created_by", "dataset.modification_time", "qhash", "dataset.datatype", "dataset.processing_version", "dataset.physics_group_name", "dataset.processed_ds_name", "dataset.primary_dataset.name", "dataset.xtcrosssection", "dataset.acquisition_era_name", "dataset.nevents", "dataset.nblocks", "dataset.size", "dataset.nlumis", "dataset.nfiles"]}
{"keys": ["dataset", "block", "run", "summary"], "urn": "summary4dataset_run", "system": "dbs", "members": ["summary.nevents", "summary.file_size", "qhash", "summary.nlumis", "dataset.name", "summary.nfiles", "run.run_number"]}
{"keys": ["dataset", "primary_dataset", "release", "tier", "group", "datatype", "status"], "urn": "fakeDatasetPattern", "system": "dbs", "members": ["dataset.created_by", "dataset.nevents", "dataset.creation_time", "dataset.modification_time", "qhash", "dataset.tag", "dataset.datatype", "dataset.nblocks", "dataset.nfiles", "dataset.size", "dataset.status", "dataset.name", "dataset.modified_by"]}
{"keys": ["dataset", "primary_dataset", "release", "tier", "group", "datatype", "status"], "urn": "fakeDatasetSummary", "system": "dbs", "members": ["dataset.created_by", "dataset.nevents", "dataset.creation_time", "dataset.modification_time", "qhash", "dataset.tag", "dataset.datatype", "dataset.nblocks", "dataset.nfiles", "dataset.size", "dataset.status", "dataset.name", "dataset.modified_by"]}
{"keys": ["dataset"], "urn": "filesummaries", "system": "dbs3", "members": ["dataset.creation_time", "dataset.data_tier_name", "dataset.prep_id", "dataset.status", "dataset.name", "dataset.dataset_id", "dataset.modified_by", "dataset.created_by", "dataset.modification_time", "qhash", "dataset.datatype", "dataset.processing_version", "dataset.physics_group_name", "dataset.processed_ds_name", "dataset.primary_dataset.name", "dataset.xtcrosssection", "dataset.acquisition_era_name", "dataset.nevents", "dataset.nblocks", "dataset.size", "dataset.nlumis", "dataset.nfiles"]}
{"keys": ["file", "run", "dataset", "block", "status"], "urn": "listFiles", "system": "dbs", "members": ["file.id", "file.validation_status", "file.creation_time", "file.name", "file.nevents", "file.status", "file.checksum", "file.queryable_meta_data", "file.md5", "file.modification_time", "file.last_modified_by", "qhash", "file.created_by", "file.adler32", "file.size", "file.block_name"]}
{"keys": ["file", "site", "site"], "urn": "fileReplicas4file", "system": "phedex", "members": ["file.id", "file.replica.node_id", "qhash", "file.replica.creation_time", "file.name", "file.replica.subscribed", "file.replica.custodial", "file.replica.group", "file.replica.site", "file.adler32", "file.checksum", "file.size", "file.creation_time", "file.replica.se", "file.original_node"]}
{"keys": ["group"], "urn": "group_responsibilities", "system": "sitedb2", "members": ["proximity.group.name", "group.username", "qhash", "group.name", "group.role"]}
{"keys": ["group"], "urn": "groups", "system": "sitedb2", "members": ["proximity.group.name", "group.username", "qhash", "group.name", "group.role"]}
{"keys": ["jobsummary", "site", "site", "user", "date", "release"], "urn": "jobsummary-plot-or-table", "system": "dashboard", "members": ["jobsummary.activity", "jobsummary.submissiontool", "jobsummary.rb", "jobsummary.terminated", "jobsummary.date1", "jobsummary.date2", "jobsummary.grid", "jobsummary.cancelled", "jobsummary.user", "jobsummary.site-calc-failed", "qhash", "jobsummary.ce", "jobsummary.app-unknown", "jobsummary.site-failed", "jobsummary.user-failed", "jobsummary.running", "jobsummary.cpu", "jobsummary.wc", "jobsummary.grid-unknown", "jobsummary.check", "jobsummary.jobtype", "jobsummary.app-succeeded", "jobsummary.application-failed", "jobsummary.tier", "jobsummary.pending", "date", "jobsummary.site", "jobsummary.app-failed", "jobsummary.events", "jobsummary.dataset", "jobsummary.allunk", "jobsummary.unsuccess", "jobsummary.application", "jobsummary.submitted", "jobsummary.unk-failed", "jobsummary.unknown", "jobsummary.aborted", "jobsummary.name", "jobsummary.done", "jobsummary.applic-failed"]}
{"keys": ["lumi", "run", "dataset"], "urn": "runsummaries", "system": "dbs3", "members": ["run.run_number", "lumi.max_lumi", "qhash"]}
{"keys": ["primary_dataset", "dataset"], "urn": "listPrimaryDatasets", "system": "dbs", "members": ["primary_dataset.other_description", "primary_dataset.trigger_path_description", "primary_dataset.name", "primary_dataset.modification_time", "primary_dataset.creation_time", "primary_dataset.last_modified_by", "primary_dataset.annotation", "primary_dataset.mc_channel_description", "qhash", "primary_dataset.end_date", "primary_dataset.id", "primary_dataset.start_date", "primary_dataset.created_by", "primary_dataset.type", "primary_dataset.mc_decay_chain", "primary_dataset.mc_production"]}
{"keys": ["release", "dataset", "file"], "urn": "releaseversions", "system": "dbs3", "members": ["release.name", "qhash", "proximity.release.name"]}
{"keys": ["release"], "urn": "fakeReleases", "system": "dbs", "members": ["release.name", "qhash"]}
{"keys": ["run", "date"], "urn": "get_run_info", "system": "conddb", "members": ["run.run_number", "qhash", "run.delivered_lumi"]}
{"keys": ["run", "date"], "urn": "rr_xmlrpc", "system": "runregistry", "members": ["run.gtkey", "run.modification_time", "run.creation_time", "run.lumi_section_ranges", "run.triggers", "run.start_time", "run.group_name", "run.nlumis", "run.hltkey", "run.stop_reason", "qhash", "run.beam_e", "run.lhcFill", "run.duration", "run.run_number", "run.l1key", "run.bfield", "run.end_time"]}
{"keys": ["run", "primary_dataset"], "urn": "reco_config", "system": "tier0", "members": ["run.run_number", "qhash", "run.reason", "run.error", "run.ts"]}
{"keys": ["run", "stream"], "urn": "express_config", "system": "tier0", "members": ["run.run_number", "qhash", "run.reason", "run.error", "run.ts"]}
{"keys": ["run"], "urn": "fakeRun4Run", "system": "dbs", "members": ["run.run_number", "qhash"]}
{"keys": ["run"], "urn": "runs", "system": "dbs3", "members": ["run.run_number", "qhash"]}
{"keys": ["site", "dataset"], "urn": "site4dataset", "system": "combined", "members": ["site.block_completion", "site.dataset_fraction", "qhash", "site.block_fraction", "site.name", "dataset.name"]}
{"keys": ["site", "dataset"], "urn": "site4dataset", "system": "dbs3", "members": ["qhash", "site.name", "dataset.name"]}
{"keys": ["site", "dataset"], "urn": "site4dataset", "system": "phedex", "members": ["site.replica_fraction", "qhash", "site.name", "site.se", "dataset.name"]}
{"keys": ["site", "site"], "urn": "site_names", "system": "sitedb2", "members": ["site.resources.is_primary", "site.info.manual_install", "site.resources.type", "site.info.tier", "site.info.country", "site.site_name", "site.resources.site_name", "site.resources.fqdn", "site.info.usage", "site.admin.email", "site.type", "site.name", "site.info.logo_url", "site.admin.surname", "qhash", "site.info.url", "site.info.tier_level", "site.admin.phone1", "site.info.site_name", "site.admin.phone2", "site.info.devel_release", "site.admin.username", "site.admin.im_handle", "site.admin.forename", "site.admin.dn", "site.info.id"]}
{"keys": ["site"], "urn": "nodes", "system": "phedex", "members": ["qhash", "site.name", "site.technology", "site.id", "proximity.site.name", "site.se", "site.kind", "site.node.noncust_node_bytes", "site.node.cust_dest_bytes", "site.node.cust_dest_files", "site.node.cust_node_files", "site.node.cust_node_bytes", "site.node.nonsrc_node_files", "site.node.noncust_dest_bytes", "site.node.name", "site.node.src_node_bytes", "site.node.noncust_node_files", "site.node.src_node_files", "site.node.noncust_dest_files", "site.node.nonsrc_node_bytes"]}
{"keys": ["site"], "urn": "nodeusage", "system": "phedex", "members": ["qhash", "site.name", "site.technology", "site.id", "proximity.site.name", "site.se", "site.kind", "site.node.noncust_node_bytes", "site.node.cust_dest_bytes", "site.node.cust_dest_files", "site.node.cust_node_files", "site.node.cust_node_bytes", "site.node.nonsrc_node_files", "site.node.noncust_dest_bytes", "site.node.name", "site.node.src_node_bytes", "site.node.noncust_node_files", "site.node.src_node_files", "site.node.noncust_dest_files", "site.node.nonsrc_node_bytes"]}
{"keys": ["site"], "urn": "tfc", "system": "phedex", "members": ["qhash", "site.name", "site.technology", "site.id", "proximity.site.name", "site.se", "site.kind", "site.node.noncust_node_bytes", "site.node.cust_dest_bytes", "site.node.cust_dest_files", "site.node.cust_node_files", "site.node.cust_node_bytes", "site.node.nonsrc_node_files", "site.node.noncust_dest_bytes", "site.node.name", "site.node.src_node_bytes", "site.node.noncust_node_files", "site.node.src_node_files", "site.node.noncust_dest_files", "site.node.nonsrc_node_bytes"]}
{"keys": ["summary", "dataset", "run"], "urn": "summary4dataset_run", "system": "dbs3", "members": ["summary.nevents", "summary.nblocks", "qhash", "summary.file_size", "summary.nlumis", "dataset", "summary.nfiles", "run"]}
{"keys": ["user"], "urn": "people_via_name", "system": "sitedb2", "members": ["qhash", "user.im_handle", "user.username", "user.phone2", "user.email", "user.forename", "user.dn", "user.name", "user.surname", "user.phone1"]}
{"member": "block.block_id", "stems": ["block", "block_id"]}
{"member": "block.created_by", "stems": ["block", "created_by"]}
{"member": "block.creation_time", "stems": ["block", "creation_time"]}
{"member": "block.dataset", "stems": ["block", "dataset"]}
{"member": "block.dataset_id", "stems": ["block", "dataset_id"]}
{"member": "block.id", "stems": ["block", "id"]}
{"member": "block.is_open", "stems": ["block", "is_open"]}
{"member": "block.last_modified_by", "stems": ["block", "last_modified_by"]}
{"member": "block.modification_time", "stems": ["block", "modification_time"]}
{"member": "block.modified_by", "stems": ["block", "modified_by"]}
{"member": "block.name", "stems": ["block", "name"]}
{"member": "block.nevents", "stems": ["block", "nevents"]}
{"member": "block.nfiles", "stems": ["block", "nfiles"]}
{"member": "block.open_for_writing", "stems": ["block", "open_for_writing"]}
{"member": "block.origin_site_name", "stems": ["block", "origin_site_name"]}
{"member": "block.replica.complete", "stems": ["block", "replica", "complete"]}
{"member": "block.replica.creation_time", "stems": ["block", "replica", "creation_time"]}
{"member": "block.replica.custodial", "stems": ["block", "replica", "custodial"]}
{"member": "block.replica.group", "stems": ["block", "replica", "group"]}
{"member": "block.replica.modification_time", "stems": ["block", "replica", "modification_time"]}
{"member": "block.replica.nfiles", "stems": ["block", "replica", "nfiles"]}
{"member": "block.replica.node_id", "stems": ["block", "replica", "node_id"]}
{"member": "block.replica.se", "stems": ["block", "replica", "se"]}
{"member": "block.replica.site", "stems": ["block", "replica", "site"]}
{"member": "block.replica.size", "stems": ["block", "replica", "size"]}
{"member": "block.replica.subscribed", "stems": ["block", "replica", "subscribed"]}
{"member": "block.site.se", "stems": ["block", "site", "se"]}
{"member": "block.size", "stems": ["block", "size"]}
{"member": "dataset", "stems": ["dataset"]}
{"member": "dataset.acquisition_era_name", "stems": ["dataset", "acquisition_era_name"]}
{"member": "dataset.created_by", "stems": ["dataset", "created_by"]}
{"member": "dataset.creation_time", "stems": ["dataset", "creation_time"]}
{"member": "dataset.data_tier_name", "stems": ["dataset", "data_tier_name"]}
{"member": "dataset.dataset_id", "stems": ["dataset", "dataset_id"]}
{"member": "dataset.datatype", "stems": ["dataset", "datatype"]}
{"member": "dataset.modification_time", "stems": ["dataset", "modification_time"]}
{"member": "dataset.modified_by", "stems": ["dataset", "modified_by"]}
{"member": "dataset.name", "stems": ["dataset", "name"]}
{"member": "dataset.nblocks", "stems": ["dataset", "nblocks"]}
{"member": "dataset.nevents", "stems": ["dataset", "nevents"]}
{"member": "dataset.nfiles", "stems": ["dataset", "nfiles"]}
{"member": "dataset.nlumis", "stems": ["dataset", "nlumis"]}
{"member": "dataset.physics_group_name", "stems": ["dataset", "physics_group_name"]}
{"member": "dataset.prep_id", "stems": ["dataset", "prep_id"]}
{"member": "dataset.primary_dataset.name", "stems": ["dataset", "primary_dataset", "name"]}
{"member": "dataset.processed_ds_name", "stems": ["dataset", "processed_ds_name"]}
{"member": "dataset.processing_version", "stems": ["dataset", "processing_version"]}
{"member": "dataset.size", "stems": ["dataset", "size"]}
{"member": "dataset.status", "stems": ["dataset", "status"]}
{"member": "dataset.tag", "stems": ["dataset", "tag"]}
{"member": "dataset.xtcrosssection", "stems": ["dataset", "xtcrosssection"]}
{"member": "date", "stems": ["date"]}
{"member": "file.adler32", "stems": ["file", "adler32"]}
{"member": "file.block_name", "stems": ["file", "block_name"]}
{"member": "file.checksum", "stems": ["file", "checksum"]}
{"member": "file.created_by", "stems": ["file", "created_by"]}
{"member": "file.creation_time", "stems": ["file", "creation_time"]}
{"member": "file.id", "stems": ["file", "id"]}
{"member": "file.last_modified_by", "stems": ["file", "last_modified_by"]}
{"member": "file.md5", "stems": ["file", "md5"]}
{"member": "file.modification_time", "stems": ["file", "modification_time"]}
{"member": "file.name", "stems": ["file", "name"]}
{"member": "file.nevents", "stems": ["file", "nevents"]}
{"member": "file.original_node", "stems": ["file", "original_node"]}
{"member": "file.queryable_meta_data", "stems": ["file", "queryable_meta_data"]}
{"member": "file.replica.creation_time", "stems": ["file", "replica", "creation_time"]}
{"member": "file.replica.custodial", "stems": ["file", "replica", "custodial"]}
{"member": "file.replica.group", "stems": ["file", "replica", "group"]}
{"member": "file.replica.node_id", "stems": ["file", "replica", "node_id"]}
{"member": "file.replica.se", "stems": ["file", "replica", "se"]}
{"member": "file.replica.site", "stems": ["file", "replica", "site"]}
{"member": "file.replica.subscribed", "stems": ["file", "replica", "subscribed"]}
{"member": "file.size", "stems": ["file", "size"]}
{"member": "file.status", "stems": ["file", "status"]}
{"member": "file.validation_status", "stems": ["file", "validation_status"]}
{"member": "group.name", "stems": ["group", "name"]}
{"member": "group.role", "stems": ["group", "role"]}
{"member": "group.username", "stems": ["group", "username"]}
{"member": "jobsummary.aborted", "stems": ["jobsummary", "aborted"]}
{"member": "jobsummary.activity", "stems": ["jobsummary", "activity"]}
{"member": "jobsummary.allunk", "stems": ["jobsummary", "allunk"]}
{"member": "jobsummary.app-failed", "stems": ["jobsummary", "app-failed"]}
{"member": "jobsummary.app-succeeded", "stems": ["jobsummary", "app-succeeded"]}
{"member": "jobsummary.app-unknown", "stems": ["jobsummary", "app-unknown"]}
{"member": "jobsummary.applic-failed", "stems": ["jobsummary", "applic-failed"]}
{"member": "jobsummary.application", "stems": ["jobsummary", "application"]}
{"member": "jobsummary.application-failed", "stems": ["jobsummary", "application-failed"]}
{"member": "jobsummary.cancelled", "stems": ["jobsummary", "cancelled"]}
{"member": "jobsummary.ce", "stems": ["jobsummary", "ce"]}
{"member": "jobsummary.check", "stems": ["jobsummary", "check"]}
{"member": "jobsummary.cpu", "stems": ["jobsummary", "cpu"]}
{"member": "jobsummary.dataset", "stems": ["jobsummary", "dataset"]}
{"member": "jobsummary.date1", "stems": ["jobsummary", "date1"]}
{"member": "jobsummary.date2", "stems": ["jobsummary", "date2"]}
{"member": "jobsummary.done", "stems": ["jobsummary", "done"]}
{"member": "jobsummary.events", "stems": ["jobsummary", "events"]}
{"member": "jobsummary.grid", "stems": ["jobsummary", "grid"]}
{"member": "jobsummary.grid-unknown", "stems": ["jobsummary", "grid-unknown"]}
{"member": "jobsummary.jobtype", "stems": ["jobsummary", "jobtype"]}
{"member": "jobsummary.name", "stems": ["jobsummary", "name"]}
{"member": "jobsummary.pending", "stems": ["jobsummary", "pending"]}
{"member": "jobsummary.rb", "stems": ["jobsummary", "rb"]}
{"member": "jobsummary.running", "stems": ["jobsummary", "running"]}
{"member": "jobsummary.site", "stems": ["jobsummary", "site"]}
{"member": "jobsummary.site-calc-failed", "stems": ["jobsummary", "site-calc-failed"]}
{"member": "jobsummary.site-failed", "stems": ["jobsummary", "site-failed"]}
{"member": "jobsummary.submissiontool", "stems": ["jobsummary", "submissiontool"]}
{"member": "jobsummary.submitted", "stems": ["jobsummary", "submitted"]}
{"member": "jobsummary.terminated", "stems": ["jobsummary", "terminated"]}
{"member": "jobsummary.tier", "stems": ["jobsummary", "tier"]}
{"member": "jobsummary.unk-failed", "stems": ["jobsummary", "unk-failed"]}
{"member": "jobsummary.unknown", "stems": ["jobsummary", "unknown"]}
{"member": "jobsummary.unsuccess", "stems": ["jobsummary", "unsuccess"]}
{"member": "jobsummary.user", "stems": ["jobsummary", "user"]}
{"member": "jobsummary.user-failed", "stems": ["jobsummary", "user-failed"]}
{"member": "jobsummary.wc", "stems": ["jobsummary", "wc"]}
{"member": "lumi.max_lumi", "stems": ["lumi", "max_lumi"]}
{"member": "primary_dataset.annotation", "stems": ["primary_dataset", "annotation"]}
{"member": "primary_dataset.created_by", "stems": ["primary_dataset", "created_by"]}
{"member": "primary_dataset.creation_time", "stems": ["primary_dataset", "creation_time"]}
{"member": "primary_dataset.end_date", "stems": ["primary_dataset", "end_date"]}
{"member": "primary_dataset.id", "stems": ["primary_dataset", "id"]}
{"member": "primary_dataset.last_modified_by", "stems": ["primary_dataset", "last_modified_by"]}
{"member": "primary_dataset.mc_channel_description", "stems": ["primary_dataset", "mc_channel_description"]}
{"member": "primary_dataset.mc_decay_chain", "stems": ["primary_dataset", "mc_decay_chain"]}
{"member": "primary_dataset.mc_production", "stems": ["primary_dataset", "mc_production"]}
{"member": "primary_dataset.modification_time", "stems": ["primary_dataset", "modification_time"]}
{"member": "primary_dataset.name", "stems": ["primary_dataset", "name"]}
{"member": "primary_dataset.other_description", "stems": ["primary_dataset", "other_description"]}
{"member": "primary_dataset.start_date", "stems": ["primary_dataset", "start_date"]}
{"member": "primary_dataset.trigger_path_description", "stems": ["primary_dataset", "trigger_path_description"]}
{"member": "primary_dataset.type", "stems": ["primary_dataset", "type"]}
{"member": "proximity.group.name", "stems": ["proximity", "group", "name"]}
{"member": "proximity.release.name", "stems": ["proximity", "release", "name"]}
{"member": "proximity.site.name", "stems": ["proximity", "site", "name"]}
{"member": "qhash", "stems": ["qhash"]}
{"member": "release.name", "stems": ["release", "name"]}
{"member": "run", "stems": ["run"]}
{"member": "run.beam_e", "stems": ["run", "beam_e"]}
{"member": "run.bfield", "stems": ["run", "bfield"]}
{"member": "run.creation_time", "stems": ["run", "creation_time"]}
{"member": "run.delivered_lumi", "stems": ["run", "delivered_lumi"]}
{"member": "run.duration", "stems": ["run", "duration"]}
{"member": "run.end_time", "stems": ["run", "end_time"]}
{"member": "run.error", "stems": ["run", "error"]}
{"member": "run.group_name", "stems": ["run", "group_name"]}
{"member": "run.gtkey", "stems": ["run", "gtkey"]}
{"member": "run.hltkey", "stems": ["run", "hltkey"]}
{"member": "run.l1key", "stems": ["run", "l1key"]}
{"member": "run.lhcFill", "stems": ["run", "lhcfill"]}
{"member": "run.lumi_section_ranges", "stems": ["run", "lumi_section_ranges"]}
{"member": "run.modification_time", "stems": ["run", "modification_time"]}
{"member": "run.nlumis", "stems": ["run", "nlumis"]}
{"member": "run.reason", "stems": ["run", "reason"]}
{"member": "run.run_number", "stems": ["run", "run_number"]}
{"member": "run.start_time", "stems": ["run", "start_time"]}
{"member": "run.stop_reason", "stems": ["run", "stop_reason"]}
{"member": "run.triggers", "stems": ["run", "triggers"]}
{"member": "run.ts", "stems": ["run", "ts"]}
{"member": "site.admin.dn", "stems": ["site", "admin", "dn"]}
{"member": "site.admin.email", "stems": ["site", "admin", "email"]}
{"member": "site.admin.forename", "stems": ["site", "admin", "forename"]}
{"member": "site.admin.im_handle", "stems": ["site", "admin", "im_handle"]}
{"member": "site.admin.phone1", "stems": ["site", "admin", "phone1"]}
{"member": "site.admin.phone2", "stems": ["site", "admin", "phone2"]}
{"member": "site.admin.surname", "stems": ["site", "admin", "surname"]}
{"member": "site.admin.username", "stems": ["site", "admin", "username"]}
{"member": "site.block_completion", "stems": ["site", "block_completion"]}
{"member": "site.block_fraction", "stems": ["site", "block_fraction"]}
{"member": "site.dataset_fraction", "stems": ["site", "dataset_fraction"]}
{"member": "site.id", "stems": ["site", "id"]}
{"member": "site.info.country", "stems": ["site", "info", "country"]}
{"member": "site.info.devel_release", "stems": ["site", "info", "devel_release"]}
{"member": "site.info.id", "stems": ["site", "info", "id"]}
{"member": "site.info.logo_url", "stems": ["site", "info", "logo_url"]}
{"member": "site.info.manual_install", "stems": ["site", "info", "manual_install"]}
{"member": "site.info.site_name", "stems": ["site", "info", "site_name"]}
{"member": "site.info.tier", "stems": ["site", "info", "tier"]}
{"member": "site.info.tier_level", "stems": ["site", "info", "tier_level"]}
{"member": "site.info.url", "stems": ["site", "info", "url"]}
{"member": "site.info.usage", "stems": ["site", "info", "usage"]}
{"member": "site.kind", "stems": ["site", "kind"]}
{"member": "site.name", "stems": ["site", "name"]}
{"member": "site.node.cust_dest_bytes", "stems": ["site", "node", "cust_dest_bytes"]}
{"member": "site.node.cust_dest_files", "stems": ["site", "node", "cust_dest_files"]}
{"member": "site.node.cust_node_bytes", "stems": ["site", "node", "cust_node_bytes"]}
{"member": "site.node.cust_node_files", "stems": ["site", "node", "cust_node_files"]}
{"member": "site.node.name", "stems": ["site", "node", "name"]}
{"member": "site.node.noncust_dest_bytes", "stems": ["site", "node", "noncust_dest_bytes"]}
{"member": "site.node.noncust_dest_files", "stems": ["site", "node", "noncust_dest_files"]}
{"member": "site.node.noncust_node_bytes", "stems": ["site", "node", "noncust_node_bytes"]}
{"member": "site.node.noncust_node_files", "stems": ["site", "node", "noncust_node_files"]}
{"member": "site.node.nonsrc_node_bytes", "stems": ["site", "node", "nonsrc_node_bytes"]}
{"member": "site.node.nonsrc_node_files", "stems": ["site", "node", "nonsrc_node_files"]}
{"member": "site.node.src_node_bytes", "stems": ["site", "node", "src_node_bytes"]}
{"member": "site.node.src_node_files", "stems": ["site", "node", "src_node_files"]}
{"member": "site.replica_fraction", "stems": ["site", "replica_fraction"]}
{"member": "site.resources.fqdn", "stems": ["site", "resources", "fqdn"]}
{"member": "site.resources.is_primary", "stems": ["site", "resources", "is_primary"]}
{"member": "site.resources.site_name", "stems": ["site", "resources", "site_name"]}
{"member": "site.resources.type", "stems": ["site", "resources", "type"]}
{"member": "site.se", "stems": ["site", "se"]}
{"member": "site.site_name", "stems": ["site", "site_name"]}
{"member": "site.technology", "stems": ["site", "technology"]}
{"member": "site.type", "stems": ["site", "type"]}
{"member": "summary.file_size", "stems": ["summary", "file_size"]}
{"member": "summary.nblocks", "stems": ["summary", "nblocks"]}
{"member": "summary.nevents", "stems": ["summary", "nevents"]}
{"member": "summary.nfiles", "stems": ["summary", "nfiles"]}
{"member": "summary.nlumis", "stems": ["summary", "nlumis"]}
{"member": "user.dn", "stems": ["user", "dn"]}
{"member": "user.email", "stems": ["user", "email"]}
{"member": "user.forename", "stems": ["user", "forename"]}
{"member": "user.im_handle", "stems": ["user", "im_handle"]}
{"member": "user.name", "stems": ["user", "name"]}
{"member": "user.phone1", "stems": ["user", "phone1"]}
{"member": "user.phone2", "stems": ["user", "phone2"]}
{"member": "user.surname", "stems": ["user", "surname"]}
{"member": "user.username", "stems": ["user", "username"]}
