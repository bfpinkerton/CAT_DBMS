// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const ManagementCompany = sequelize.define("ManagementCompany", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MML entry is this relating to
        MMLrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: 'MMLs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
       // TODO: Is it right to assume "Mgmt. Co" field should refer to MCD foreign key?
        mgmtCoID: {
            type: Sequelize.INTEGER,
        },
        // TODO: Is it right to assume "Mgmt. Co./Assn. Seminar Name Tag" field should refer to MCD.BranchOffice foreign key?
        // ALSO there has to be a better name for this xD
        mgmtCoAssnSeminarNameTag: {
            type: Sequelize.INTEGER,
        },
        companyType: {
            type: Sequelize.STRING,
        },

    });
  
    return ManagementCompany;
  };