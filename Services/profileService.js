const Profile = require ("../Models/profile");

class ProfileService {

    async getProfileById(profileID) {
        return await Profile.findByPk(profileID);
    }

    async addProfile(profile) {
        return await Profile.create(profile);
    }

    async removeProfile (profileID){
        return await Profile.destroy({
            where : {PR_ID : profileID}
        })
    }

    async updateProfile (profileID, profile){
        return await Profile.update(profile, {
            where : {PR_ID : profileID},
            individualHooks : true
        })
    }
}

module.exports = new ProfileService();