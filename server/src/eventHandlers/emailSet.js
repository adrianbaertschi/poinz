module.exports = (room, eventPayload) => room.updateIn(['users', eventPayload.userId], user => user.set('email', eventPayload.email));
