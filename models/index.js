const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.updates = require("./update.model.js")(sequelize, Sequelize);
//
db.mal = require("./mal.model.js")(sequelize, Sequelize);
db.supplementalAssociationInfo = require("./mal_SupplementalAssociationInfo.model.js")(sequelize, Sequelize);
db.generalBoardInfo = require("./mal_GeneralBoardInfo.model.js")(sequelize, Sequelize);
db.representationInquiries = require("./mal_RepresentationInquiries.model.js")(sequelize, Sequelize);
db.merchandiseMug = require("./mal_MerchandiseMug.model.js")(sequelize, Sequelize);
db.merchandiseFloridaStatue = require("./mal_MerchandiseFloridaStatue.model.js")(sequelize, Sequelize);
db.socialMedia = require("./mal_SocialMedia.model.js")(sequelize, Sequelize);
db.hiringRecord = require("./mal_HiringRecord.model.js")(sequelize, Sequelize);
db.terminationRecord = require("./mal_TerminationRecord.model.js")(sequelize, Sequelize);
db.referralSource = require("./mal_ReferralSource.model.js")(sequelize, Sequelize);
db.referralMgmtCoVendor = require("./mal_ReferralMgmtCoVendor.model.js")(sequelize, Sequelize);
db.presentations = require("./mal_Presentations.model.js")(sequelize, Sequelize);
db.potentialClientReports = require("./mal_PotentialClientReports.model.js")(sequelize, Sequelize);
//
db.mml = require("./mml.model.js")(sequelize, Sequelize);
db.generalInformation = require("./mml_GeneralInformation.model.js")(sequelize, Sequelize);
db.businessInformation = require("./mml_BusinessInformation.model.js")(sequelize, Sequelize);
db.onSiteInformation = require("./mml_OnSiteInformation.model.js")(sequelize, Sequelize);
db.staffInformation = require("./mml_StaffInformation.model.js")(sequelize, Sequelize);
db.homeInformation = require("./mml_HomeInformation.model.js")(sequelize, Sequelize);
db.socialMediaExtras = require("./mml_SocialMediaExtras.model.js")(sequelize, Sequelize);
db.referrals = require("./mml_Referrals.model.js")(sequelize, Sequelize);
//



module.exports = db;