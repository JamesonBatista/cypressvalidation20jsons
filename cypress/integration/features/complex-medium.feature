Feature: Validando api complex-medium array json

	@complexMedium
	Scenario: Validacao complex-medium
		Given Que seja efeutado um GET na api complex-medium
		Then For impresso a lista de usuarios com idade
		And For impresso a lista de carros disponiveis
		Then Sera validado endereco e o ceo