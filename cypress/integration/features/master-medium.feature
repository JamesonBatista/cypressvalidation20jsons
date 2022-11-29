Feature: Validando API master-simples array

	@masterMedium
	Scenario: Validacao master-simples
		Given Que seja efetuado um GET na api master-medium
		When For impresso quais carros o cliente pode comprar de acordo com valor que possue array
		And Caso ela seja cliente VIP sera impresso os carros da categoria array
		Then Sera validado o endereco da loja