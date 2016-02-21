(function() {
	var pwd = document.getElementById('pwd')
	var chk = document.getElementById('showPwd')

	addEvent(chk, 'change', function(e) {
		var target = e.target || e.srcElement
		if(target.checked) {
			pwd.type = 'text'
		} else {
			pwd.type = 'password'
		}
	})
}())