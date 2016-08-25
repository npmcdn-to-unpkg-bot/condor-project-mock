
var categories = [
	{
		name: 'Sociales',
		subcategories: [
			'Sociología',
			'Historia'
		]
	},
	{
		name: 'Ciencias',
		subcategories: [
			'Naturales',
			'Física',
			'Química'
		]
	},
	{
		name: 'Matemáticas',
		subcategories: [
			'Estadística',
			'Cálculo'
		]
	},
	{
		name: 'Medicina',
		subcategories: [
			'Cardiología',
			'Pediatría'
		]
	}
];

var featured = [
	{
		title: 'Nuevos Lorem Ipsum',
		author: 'Carlos Frias',
		date: '10/09/2016',
		type: 'Ensayo',
		category: 'Estadística',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Otros Lorem Ipsum',
		author: 'Carlos Frias',
		date: '10/10/2016',
		type: 'Ensayo',
		category: 'Cálculo',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Tentios Lorem Ipsum',
		author: 'Carlos Frias',
		date: '24/09/2016',
		type: 'Informe',
		style: 'MLA',
		category: 'Sociología',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Nuevos Lorem Ipsum',
		author: 'Carlos Frias',
		date: '10/09/2016',
		type: 'Informe',
		style: 'Chicago',
		category: 'Física',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Otros Lorem Ipsum',
		author: 'Carlos Frias',
		date: '10/10/2016',
		type: 'Informe',
		style: 'Chicago',
		category: 'Física',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Tentios Lorem Ipsum',
		author: 'Carlos Frias',
		date: '24/09/2016',
		type: 'Ensayo',
		category: 'Química',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	}
];

var recent = [
	{
		title: 'Falso Lorem',
		author: 'Carlos Frias',
		date: '12/09/2016',
		type: 'Informe',
		style: 'AMA',
		category: 'Cardiología',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Siguen los Lorem Ipsum',
		author: 'Carlos Frias',
		date: '12/09/2016',
		type: 'Informe',
		style: 'Chicago',
		category: 'Química',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	},
	{
		title: 'Cuidado con los Lorem Ipsum',
		author: 'Carlos Frias',
		date: '12/09/2016',
		type: 'Informe',
		style: 'APA',
		category: 'Pediatría',
		excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
		'Praesent tristique vestibulum justo id feugiat. Nam consequat, nibh' +
		' sit amet volutpat consectetur, nibh metus rhoncus massa, id blandit mauris arcu vitae metus.'
	}
];

module.exports = {
	categories: categories,
	featured: featured,
	recent: recent
};
