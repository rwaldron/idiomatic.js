# Princípios para Escrever JavaScript de forma Consistente e Idiomática

## Este é um documento vivo e novas ideias para melhorar os códigos correspondentes são sempre bem vindas. Contribua: faça fork, clone, branch, commit, push, pull request.

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idangazit)
* Leo Balter [@leobalter](http://twitter.com/leobalter), [github](https://github.com/leobalter)
* Breno Oliveira [@garu_rj](http://twitter.com/garu_rj), [github](https://github.com/garu)
* Leo Beto Souza [@leobetosouza](http://twitter.com/@leobetosouza), [github](https://github.com/leobetosouza)

## Todo código em qualquer aplicação deve parecer como se tivesse sido escrito por uma única pessoa, independentemente de quantas pessoas tenham contribuído.

### A lista a seguir descreve as práticas que eu uso em todo código onde sou o autor original; contribuições em projetos que eu criei devem seguir essas mesmas orientações.

### Eu não tenho a intenção de impor minhas preferências por estilos nos códigos de outras pessoas; se eles seguem um estilo em comum, isso deve ser respeitado.

> "Parte de ser um bom gestor de um projeto bem sucedido é perceber que escrever código para si mesmo é uma má ideia™. Se milhares de pessoas estão usando o seu código, escreva-o com máxima clareza, não sob a sua preferência pessoal de como ser esperto com a especificação." - Idan Gazit

## Traduções

* [French](https://github.com/jfroffice/idiomatic.js/)
* [Spanish](https://github.com/MatiasArriola/idiomatic.js/)
* [Português - Brasil](https://github.com/leobalter/idiomatic.js/)


## Conteúdo importante e não idiomático:

### Qualidade de código: ferramentas, recursos e referências bacanas

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Leveraging Code Quality Tools (em pt_BR: Tirando Proveito de Ferramentas de Qualidade de Código) por Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)


### Fique ligado

[http://es5.github.com/](http://es5.github.com/)

A lista a seguir deve ser considerada: 1) incompleta; e 2) *LEITURA OBRIGATÓRIA*. Eu não concordo sempre com os estilos escritos pelos autores abaixo, mas uma coisa é certa: eles são consistentes. Além disso, esses são autoridades na linguagem.

 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Rebecca Murphey](http://www.rebeccamurphey.com/) or [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
 * [Essential JavaScript & jQuery Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) 


### Processos de build e deploy

Projetos devem sempre tentar incluir algumas formas genéricas nas quais o código podem ser checados com ferramentas de lint, testados e compactados no preparo para uso em produção. Para essa tarefa, o [grunt](https://github.com/cowboy/grunt) pelo Ben Alman é a melhor opção, além de ter substituído oficialmente o diretório "kits/" neste repositório.


### Ambiente de teste

Projetos _devem_ incluir alguma forma de teste unitário, de referência, de implementação ou funcional. Demonstrações de casos de uso NÃO SE QUALIFICAM como "testes". A lista a seguir contém frameworks de testes, nenhuma delas é considerada melhor que as demais.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)

## Índice

 * [Espaço em branco](#whitespace)
 * [Sintaxe bonita](#spacing)
 * [Checagem de escrita (cortesia das Recomendações de Estilo do Núcleo do jQuery)](#type)
 * [Avaliação condicional](#cond)
 * [Estilo prático](#practical)
 * [Nomenclatura](#naming)
 * [Miscelâneas](#misc)
 * [Objetos nativos e hospedados](#native)
 * [Comentários](#comments)
 * [Código em apenas um idioma](#language)


## Manifesto de estilo idiomático


1. <a name="whitespace">Espaço em branco</a>

	* Nunca misture espaços e tabs.
 	* Quando começar um projeto, antes de escrever qualquer código, escolha entre indentação suave (espaços) ou tabulação real (tabs) - isso é lei.
		* Pela legibilidade, eu sempre recomendo que configure o tamanho de indentação de seu editor para dois caracteres - isso significa dois espaços ou dois espaços representando um tab real.
	* Se o seu editor suportar, sempre trabalhe com a configuração de "mostrar caracteres invisíveis" ligada. Os benefícios desta prática são:
		* fortalecer a consistência;
		* eliminar espaço em branco ao final da linha;
		* eliminar espaços em uma linha em branco;
		* commits e diffs mais legíveis.


2. <a name="spacing">Sintaxe bonita</a>

	A. Parênteses, chaves e quebras de linhas

	```javascript

	// if/else/for/while/try sempre tem espaços, chaves e ocorrem em múltiplas linhas
	// isso facilita a legibilidade

	// 2.A.1.1
	// Exemplos de código pouco claro/bagunçado

	if(condicao) facaAlgo();

	while(condicao) iteracao++;

	for(var i=0;i<100;i++) algumaIteracao();


	// 2.A.1.1
	// Use espaço em branco para facilitar a leitura

	if ( condicao ) {
		// instruções
	}

	while ( condicao ) {
		// instruções
	}

	for ( var i = 0; i < 100; i++ ) {
		// instruções
	}

	// Melhor ainda:

	var i,
		length = 100;

	for ( i = 0; i < length; i++ ) {
		// instruções
	}

	// Ou...

	var i = 0,
		length = 100;

	for ( ; i < length; i++ ) {
		// instruções
	}

	var prop;

	for ( prop in object ) {
		// instruções
	}


	if ( true ) {
		// instruções
	} else {
		// instruções
	}
	```


	B. Atribuições, declarações, funções (nomenclatura, expressão, construtor)

	```javascript

	// 2.B.1.1
	// Variáveis
	var foo = "bar",
		num = 1,
		undef;

	// Notações literais:
	var array = [],
		object = {};


	// 2.B.1.2
	// Utilizando apenas um `var` por escopo (função) promove legibilidade
	// e mantém a sua lista de declaração livre de desordem (além de evitar algumas tecladas)
	
	// Ruim
	var foo = "";
	var bar = "";
	var qux;

	// Bom
	var foo = "",
		bar = "",
		quux;

	// ou..
	var // comentário aqui
	foo = "",
	bar = "",
	quux;


	// 2.B.1.3
	// declarações de variáveis devem sempre estar no início de seu respectivo escopo (função)
	// O mesmo deve acontecer para declarações de `const` e `let` do ECMAScript 6.

	// Ruim
	function foo() {

		// algumas instruções aqui

		var bar = "",
			qux;
	}

	// Bom
	function foo() {
		var bar = "",
			qux;

		// algumas instruções depois das declarações de variáveis
	}

	```

	```javascript

	// 2.B.2.1
	// Declaração de função nomeada
	function foo( arg1, argN ) {

	}

	// Utilização
	foo( arg1, argN );


	// 2.B.2.2
	// Declaração de função nomeada
	function square( number ) {
		return number * number;
	}

	// Utilização
	square( 10 );

	// Estilo de passagem artificialmente contínua
	function square( number, callback ) {
		callback( number * number );
	}

	square( 10, function( square ) {
		// instruções de callback
	});


	// 2.B.2.3
	// Expressão de função
	var square = function( number ) {
		// Retorna algo de valor e relevante
		return number * number;
	};

	// Expressão de função com identificador
	// Esse formato preferencial tem o valor adicional de permitir
	// chamar a si mesmo e ter uma identidade na pilha de comandos:
	var factorial = function factorial( number ) {
		if ( number < 2 ) {
			return 1;
		}

		return number * factorial( number-1 );
	};


	// 2.B.2.4
	// Declaração de construtor
	function FooBar( options ) {

		this.options = options;
	}

	// Utilização
	var fooBar = new FooBar({ a: "alpha" });

	fooBar.options;
	// { a: "alpha" }

	```


	C. Exceções, pequenos desvios

	```javascript

	// 2.C.1.1
	// Funções com callbacks
	foo(function() {
		// Veja que não há espaço extra entre os parênteses
		// da chamada de função e a palavra "function"
	});

	// Função recebendo uma array, sem espaço
	foo([ "alpha", "beta" ]);

	// 2.C.1.2
	// Função recebendo um objeto, sem espaço
	foo({
		a: "alpha",
		b: "beta"
	});

	// Parênteses internos de agrupamento, sem espaço
	if ( !("foo" in obj) ) {

	}

	```

	D. Consistência sempre ganha

	Nas seções 2.A-2.C, as regras de espaço em branco são recomendadas sob um propósito simples e maior: consistência.
	É importante notar que preferências de formatação, tais como "espaço em branco interno" deve ser considerado opcional, mas apenas um estilo deve existir por toda a fonte de seu projeto.

	```javascript

	// 2.D.1.1

	if (condition) {
		// instruções
	}

	while (condition) {
		// instruções
	}

	for (var i = 0; i < 100; i++) {
		// instruções
	}

	if (true) {
		// instruções
	} else {
		// instruções
	}

	```

	E. Finais de linha e linhas vazias

	Espaços em branco podem arruinar diffs e fazer com que _changesets_ sejam impossíveis de se ler. Considere incorporar um gancho de pre-commit que remova espaços em branco ao final das linhas e espaços em branco em linhas vazias automaticamente.

3. <a name="type">Checagem de escrita (cortesia das Recomendações de Estilo do Núcleo do jQuery)</a>

	3.A Tipos existentes 

	* String:

		`typeof variable === "string"`

	* Number:

		`typeof variable === "number"`

	* Boolean:

		`typeof variable === "boolean"`

	* Object:

		`typeof variable === "object"`

	* Array:

		`Array.isArray(arrayObject)`
		(wherever possible)

	* null:

		`variable === null`

	* null ou undefined:

		`variable == null`

	* undefined:

		* Variáveis Globais:

			* `typeof variable === "undefined"`

		* Variáveis Locais:

			* `variable === undefined`

		* Propriedades:
			* `object.prop === undefined`
			* `object.hasOwnProperty( prop )`
			* `"prop" in object`


	JavaScript é uma linguagem de escrita dinâmica - o que pode ser seu melhor amigo ou pior inimigo, então: sempre respeite o `tipo`, como recomendado.


	3.B Tipos coagidos

	Considere as implicações do seguinte...

	Dado este HTML:

	```html

	<input type="text" id="foo-input" value="1">

	```


	```js

	// 3.B.1.1

	// `foo` foi declarado com o valor `0` e seu tipo é `number`
	var foo = 0;

	// typeof foo;
	// "number"
	...

	// Algum momento depois no seu código, você precisa atualizar `foo`
	// com um novo valor derivado de um elemento `input`

	foo = document.getElementById("foo-input").value;

	// Se você testasse `typeof foo` agora, o resultado seria uma `string`
	// Isso significa que se tivesse uma lógica que testasse `foo` como:

	if ( foo === 1 ) {

		importantTask();

	}

	// `importantTask()` nunca seria chamado, mesmo que `foo` tivesse um valor "1"


	// 3.B.1.2

	// Você pode prevenir problemas utilizando uma coerção automática com os operadores + ou -:

	foo = +document.getElementById("foo-input").value;
	      ^ o operador + irá converter o operando do lado direito para um número

	// typeof foo;
	// "number"

	if ( foo === 1 ) {

		importantTask();

	}

	// `importantTask()` será chamado 
	```

	Aqui temos alguns casos comuns com coerções:


	```javascript

	// 3.B.2.1

	var number = 1,
		string = "1",
		bool = false;

	number;
	// 1

	number + "";
	// "1"

	string;
	// "1"

	+string;
	// 1

	+string++;
	// 1

	string;
	// 2

	bool;
	// false

	+bool;
	// 0

	bool + "";
	// "false"
	```


	```javascript
	// 3.B.2.2

	var number = 1,
		string = "1",
		bool = true;

	string === number;
	// false

	string === number + "";
	// true

	+string === number;
	// true

	bool === number;
	// false

	+bool === number;
	// true

	bool === string;
	// false

	bool === !!string;
	// true
	```

	```javascript
	// 3.B.2.3

	var array = [ "a", "b", "c" ];

	!!~array.indexOf( "a" );
	// true

	!!~array.indexOf( "b" );
	// true

	!!~array.indexOf( "c" );
	// true

	!!~array.indexOf( "d" );
	// false


	var num = 2.5;

	parseInt( num, 10 );

	// é o mesmo que...

	~~num;

	```

4. <a name="cond">Avaliação condicional</a>

	```javascript

	// 4.1.1
	// Quando estiver apenas avaliando se um array tem tamanho,
	// ao invés disso:
	if ( array.length > 0 ) ...

	// ...avalie a verdade lógica, como isso:
	if ( array.length ) ...


	// 4.1.2
	// Quando estiver apenas avaliando se um array está vazio,
	// ao invés disso:
	if ( array.length === 0 ) ...

	// ...avalie a verdade lógica, como isso:
	if ( !array.length ) ...


	// 4.1.3
	// Quando estiver apenas avaliando se uma string não está vazia,
	// ao invés disso:
	if ( string !== "" ) ...

	// ...avalie a verdade lógica, como isso:
	if ( string ) ...


	// 4.1.4
	// Quando estiver apenas avaliando se uma string está vazia,
	// ao invés disso:
	if ( string === "" ) ...

	// ...avalie se ela é logicamente falsa, como isso:
	if ( !string ) ...


	// 4.1.5
	// Quando estiver avaliando se uma referência é verdadeira,
	// ao invés disso:
	if ( foo === true ) ...

	// ...avalie como se quisesse isso, use a vantagem de suas capacidades primitivas:
	if ( foo ) ...


	// 4.1.6
	// Quando estiver avaliando se uma referência é falsa,
	// ao invés disso:
	if ( foo === false ) ...

	// ...use a negação para coagir para uma avaliação verdadeira
	if ( !foo ) ...

	// ...Seja cuidadoso, isso também irá funcionar com: 0, "", null, undefined, NaN
	// Se você _PRECISA_ testar um valor falso de tipo booleano, então use
	if ( foo === false ) ...


	// 4.1.7
	// Quando apenas estiver avaliando uma referência que pode ser `null` ou `undefined`, mas não `false`, "" ou 0,
	// ao invés disso:
	if ( foo === null || foo === undefined ) ...

	// ...aproveite a vantagem da coerção de tipo com ==, como isso:
	if ( foo == null ) ...

	// Lembre-se, utilizando == irá funcionar em um `null` TANTO para `null` quanto para `undefined`
	// mas não para `false`, "" ou 0
	null == undefined

	```
	SEMPRE avalie para o melhor e mais preciso resultado - o que está acima é uma recomendação, não um dogma.

	```javascript

	// 4.2.1
	// Coerção de tipo e notas sobre avaliações

	Prefira `===` ao invés de  `==` (ao menos em casos que necessitem avaliação de tipos flexíveis)

	=== não faz coerção de tipo, o que significa que:

	"1" === 1;
	// false

	== faz coerção de tipo, o que significa que:

	"1" == 1;
	// true


	// 4.2.2
	// Booleanos, verdades e negações

	Booleanos: true, false

	Tipos verdadeiros são: "foo", 1

	Tipos de negações são: "", 0, null, undefined, NaN, void 0

	```


5. <a name="practical">Estilo Prático</a>

	```javascript

	// 5.1.1
	// Um módulo prático

	(function( global ) {
		var Module = (function() {

			var data = "segredo";

			return {
				// Essa é uma propriedade booleana
				bool: true,
				// Algum valor de string
				string: "uma string",
				// Uma propriedade em array
				array: [ 1, 2, 3, 4 ],
				// Uma propriedade em objeto
				object: {
					lang: "pt-BR"
				},
				getData: function() {
					// pega o valor atual de `data`
					return data;
				},
				setData: function( value ) {
					// atribui o valor a data que é retornado
					return ( data = value );
				}
			};
		})();

		// Outras coisas que também podem acontecer aqui

		// Expor seu módulo ao objeto global
		global.Module = Module;

	})( this );

	```

	```javascript

	// 5.2.1
	// Um construtor prático

	(function( global ) {

		function Ctor( foo ) {

			this.foo = foo;

			return this;
		}

		Ctor.prototype.getFoo = function() {
			return this.foo;
		};

		Ctor.prototype.setFoo = function( val ) {
			return ( this.foo = val );
		};


		// Para chamar um construtor sem o `new`, você pode fazer assim:
		var ctor = function( foo ) {
			return new Ctor( foo );
		};


		// exponha nosso construtor ao objeto global
		global.ctor = ctor;

	})( this );

	```



6. <a name="naming">Nomenclatura</a>


	Se você não é um compilador humano ou compactador de código, não tente ser um.

	O código a seguir é um exemplo de nomenclatura ruim:

	```javascript

	// 6.1.1
	// Exemplo de código com nomenclaturas fracas

	function q(s) {
		return document.querySelectorAll(s);
	}
	var i,a=[],els=q("#foo");
	for(i=0;i<els.length;i++){a.push(els[i]);}
	```

	Sem dúvida, você já deve ter escrito código assim - provavelmente isso acaba hoje.

	Aqui temos o mesmo trecho lógico, porém com uma nomenclatura simpática e mais inteligente (e uma estrutura legível):

	```javascript

	// 6.2.1
	// Exemplo de código com nomenclatura melhorada

	function query( selector ) {
		return document.querySelectorAll( selector );
	}

	var idx = 0,
		elements = [],
		matches = query("#foo"),
		length = matches.length;

	for( ; idx < length; idx++ ){
		elements.push( matches[ idx ] );
	}

	```

	Algumas indicações adicionais de nomenclaturas

	```javascript

	// 6.3.1
	// Nomes de strings

	`dog` é uma string


	// 6.3.2
	// Nomes de arrays 

	`dogs` é uma array de strings `dog`


	// 6.3.3
	// Nomes de funções, objetos, instancias, etc

	// funções e declarações de variáveis
	camelCase; 


	// 6.3.4
	// Nomes de construtores, protótipos, etc

	// função construtora
	PascalCase;


	// 6.3.5
	// Nomes de expressões regulares

	rDesc = //;


	// 6.3.6
	// Do Guia de Estilos da Biblioteca do Google Closure 

	funcoesNomeadasAssim;
  variaveisNomeadasAssim;
	ConstrutoresNomeadosAssim;
	EnumNomeadosAssim;
	metodosNomeadosAssim;
	CONSTANTES_SIMBOLICAS_ASSIM;

	// nota da tradução: não havia tradução no Google Closure, o original é o seguinte:

	functionNamesLikeThis;
	variableNamesLikeThis;
	ConstructorNamesLikeThis;
	EnumNamesLikeThis;
	methodNamesLikeThis;
	SYMBOLIC_CONSTANTS_LIKE_THIS;


	```

7. <a name="misc">Miscelânea</a>

	Esta seção deve servir para ilustrar idéias e conceitos sobre como não se considerar isso como um dogma, mas ao invés disso deve encorajar o questionamento de práticas na tentativa de encontrar formas melhores para executar tarefas comuns na programação em JavaScript.

	A. Evite utilizar `switch`, métodos modernos de verificação deverão adicionar funções com `switch` em suas listas negras

	Parece haver melhorias drásticas à execução de `switch` nas últimas versões do Firefox e do Chrome:
	http://jsperf.com/switch-vs-object-literal-vs-module

	Melhorias notáveis podem ser observadas aqui também:
	https://github.com/rwldrn/idiomatic.js/issues/13

	```javascript

	// 7.A.1.1
	// Um exemplo de uma instrução switch

	switch( foo ) {
		case "alpha":
			alpha();
			break;
		case "beta":
			beta();
			break;
		default:
			// algo para executar por padrão
			break;
	}

	// 7.A.1.2
	// Um caso melhor seria utilizar um objeto literal ou até um módulo:

	var switchObj = {
		alpha: function() {
			// instruções
			// um retorno
		},
		beta: function() {
			// instruções
			// um retorno
		},
		_default: function() {
			// instruções
			// um retorno
		}
	};

	var switchModule = (function () {
		return {
			alpha: function() {
				// instruções
				// um retorno
			},
			beta: function() {
				// instruções
				// um retorno
			},
			_default: function() {
				// instruções
				// um retorno
			}
		};
	})();


	// 7.A.1.3
	// Se `foo` é uma propriedade de `switchObj` ou `switchModule`, execute-a como um método...

	( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

	( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

	// Se você conhece e confia no valor de `foo`, você pode inclusive omitir a checagem `OR`
	// deixando apenas a execução:

	switchObj[ foo ]( args );

	switchModule[ foo ]( args );


	// Esse padrão também promove a reutilização de código

	```

	B. Retornos antecipados promovem legibilidade de código com mínima diferença de performance

	```javascript

	// 7.B.1.1
	// Ruim:
	function returnLate( foo ) {
		var ret;

		if ( foo ) {
			ret = "foo";
		} else {
			ret = "quux";
		}
		return ret;
	}

	// Bom:

	function returnEarly( foo ) {

		if ( foo ) {
			return "foo";
		}
		return "quux";
	}

	```


8. <a name="native">Objetos nativos e hospedados</a>

	O princípio básico aqui é:

	### Não faça coisas estúpidas e tudo vai ficar bem.

	Para reforçar esse conceito, por favor, assista essa apresentação:

	#### “Everything is Permitted: Extending Built-ins” por Andrew Dupont (JSConf2011, Portland, Oregon)

	<iframe src="http://blip.tv/play/g_Mngr6LegI.html" width="480" height="346" frameborder="0" allowfullscreen></iframe><embed type="application/x-shockwave-flash" src="http://a.blip.tv/api.swf#g_Mngr6LegI" style="display:none"></embed>

	http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542


9. <a name="comments">Comentários</a>

	* O estilo do JSDoc é bom (dicas de escrita do Closure Compiler++)
	* Uma linha única acima do código que é comentado
	* Multiplas linhas é bom 
	* Comentários ao final da linha são proibidos!


10. <a name="language">Código em apenas um idioma</a>

	Programas devem ser escritos em um único idioma, não importe o idioma que seja, a ser definido por quem o mantém.



## Apêndice

### Vírgula inicial.

Qualquer projeto que cite este documento como seu guia base de estilo não aceitará formatação de código com vírgula inicial, a não ser que isso seja explicitamente especificado de outra forma.

Veja: https://mail.mozilla.org/pipermail/es-discuss/2011-September/016805.html
Destaques: "Isso é horrível, e um motivo para rejeitar vírgulas na frente.", "vírgulas na frente devem ser evitadas"
