Feature: Validando API camada-array-guerra-divina

	@camadaArrayGuerraDivina
	Scenario: Validacao do JSON camada-array-guerra-divina
		Given Que seja efetuado um GET na api camada-array-guerra-divina
		And For acessado a intro  title desafio description "Impossível de validar"
		And For acessado a primeira camada, e depois a segunda com o valor "difícil chegar aqui"
		And For acessado a terceira camada com o valor "cada vez mais difícil"
		And A quarta camada com o valor  "complicando ainda mais"
		And For acessado o objeto da quarta camada com o valor "as vezes a camada precisa de uns objetos pra complicar"
		And For acessado o segundo objecto da quarta camada com o valor "Ainda mais complicado, 2 objetos dentro de uma camada"
		And For acessdo o title da quinta camada com o valor "depois da quarta-camada a quinta pode complicar mais ainda"
		And FOr acessado o array da intro da quinta camada com o title  "essa intro complica mais ainda porque nasceu um array dentor de um objeto da quinta camada. Assim não dá."
		Then Sera acessado a sexta camada do JSON com o title "ah, sexta camada, normal, simples, sem complicações"
		And Sera acessado o array do intro da sexta camada com o title "acima tem um array dentro de um objeto, que complicado"
		And E for acessado o objecto da sexta camada com o title "segundo objeto da camada-array tem outro objeto dentro, impossível isso."
		And Por ultimo acessado e validado o valor do title sem objecto "Acho que 6 camadas são suficiente"
