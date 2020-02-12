var table = new Vue({
	el: "#list",
	data: {
		list: []
	},
	mounted: function() {
		this.get();
	},
	methods: {
		get: function() {
			this.$http.get('http://ruohua.easy.echosite.cn/Spring_app2/ListServlet').then(
				function(res) {
					this.list = res.data.data;
				},
				function() {
					alert("网络出了点问题");
				}
			)
		},
		down: function(index) {
			var url = 'http://alphaluka.cn/download?filename=' + this.list[index].fileName;
			console.log(url);
			window.open(url);
		}
	}
});