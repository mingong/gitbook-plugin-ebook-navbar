module.exports = {
	hooks: {
		"page:before": function (page) {
			if (this.options.generator == 'ebook') {
				page.content = page.content + "\n🗒🗒 <a href=\"SUMMARY.html\">Table of Contents</a>\n";
				
				if (page.progress.current.prev) {
					page.content = page.content + "\n🗒🗒 [Prev](" + page.progress.current.prev.path + ")\n";
				}
				
				if (page.progress.current.next) {
					page.content = page.content + "\n🗒🗒 [Next](" + page.progress.current.next.path + ")\n";
				}
				
				page.content = page.content + "\n🗒🗒 [Home](README.md)\n";
			}
			
			return page;
		}
	}
};
