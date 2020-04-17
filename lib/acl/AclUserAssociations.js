'use strict';
var _ = require('lodash')

module.exports = (acl) => {

    const { _models, _options } = acl;
    const AclUser = _options.UserModel || _models.AclUser;

    acl._UserModel = AclUser;

    AclUser.prototype.assignRole = function(role){
        return acl.assignRole(this, role)
    }

    AclUser.prototype.assignRoles = function(roles){
        return acl.assignRoles(this, roles);
    }

    AclUser.prototype.rmAssignedRoles = function(roles){
        return acl.rmAssignedRoles(this, roles)
    }

}