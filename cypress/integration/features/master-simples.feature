Feature: Validando API master-simples

	Scenario: Validacao master-simples
		Given Que seja efetuado um GET na api master-simples
		When For impresso quais carros o cliente pode comprar de acordo com valor que possue
		And Caso ela seja cliente VIP sera impresso os carros da categoria
		Then Sera validado o endereco da loja