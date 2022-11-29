Feature: Validando API hard-complex

	@hardComplex
	Scenario: Validacao hard-complex
		Given Que seja efetuado um GET na api hard-complex
		When For impresso o carro que cada cliente pode comprar de acordo com o valor que possue
		Then Sera validado o endereco da loja
