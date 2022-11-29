Feature: Validando API master-complex

	@masterComplex
	Scenario: Validacao master-complex
		Given Que seja efetuado um GET na api master-complex
		When For impresso quais carros o cliente pode comprar de acordo com valor que possue complex
		And Caso ela seja cliente VIP sera impresso os carros da categoria complex
		Then Sera validado o endereco da loja