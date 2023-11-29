module.exports = {
  isOwner: function (request, response) {
    if (request.session.is_logined) {
      return true;
    } else {
      return false;
    }
  },
  statusUI: function (request, response) {
    var authStatusUI = "login please";
    if (this.isOwner(request, response)) {
      authStatusUI = `Welcome ${request.session.nickname}! | <a href="/auth/logout">logout</a>`;
    }
    return authStatusUI;
  },
};
