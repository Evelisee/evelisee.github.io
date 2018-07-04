angular.module('app')

.service('dataService', function(){
	return{
		getInfoProjects: function(){
			var data = [
				{
					'id':1,
					'title': '[Design]',
					'contentDescription': 'Wedding Invitation - Júlia e Rodrigo',
					'file': 'invitation_julia',
				},
				{
					'id':2,
					'title': '[Front-end & Design]',
					'contentDescription': 'Website YBOH',
					'file': 'yboh'
				},
				{
					'id':3,
					'title': '[Front-end]',
					'contentDescription': 'Website Pop Escola',
					'file': 'popescola'
				},
				{
					'id':4,
					'title': '[Front-end]',
					'contentDescription': 'Website Yboh',
					'file': 'yboh2'
				},
			]


			return data;
		}
	}
})