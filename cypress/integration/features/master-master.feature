Feature: Validando API master-master

	@masterMaster
	Scenario: Validacao do JSON master-master
		Given Que seja efetuado um GET na api master-master
		When For impresso quais carro cada cliente pode comprar de acordo com o valor que possue
		And Caso ele seja VIP sera impresso quais carros ele tem direito
		Then Sera validado o endereco north "Northland", sul "Lago Woolf"  e o ceo "Michael Corbin"
		And Sera validado o campo achou do nivel pre-sal "Chegou no nível pré-sal de validação JSON."
		And Sera validado o campo achou do nivel pre-sal-interno "Chegou no nível pré-sal-interno de validação JSON."