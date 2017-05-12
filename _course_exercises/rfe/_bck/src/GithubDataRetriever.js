var test = [];

jQuery.githubUserRepositories = function(username, callback) {
	jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
}

jQuery.fn.loadRepositores = function(username) {
	this.html("<span>Querying GitHub for repositories...</span>");
	
	var target = this;
	console.log(target);
		$.githubUserRepositories(username, function(data) {
		var repos = data.data;
		sortByNumberOfWatchers(repos);
		
		$(repos).each(function() {
		    test.push({
		        id: this.id,
		        name: this.name,
		        description: this.description,
		        url: this.url
		    });
		});
	});
	
	function sortByNumberOfWatchers(repos) {
		repos.sort(function(a,b) {
			return b.watchers - a.watchers;
		});
	}
};