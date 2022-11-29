Feature: Validando JSON complex

	@complex
	Scenario: Validando complex
		Given Que seja efetuado um GET na api complex
		Then For impresso a lista de users com nome e idade
		And For impresso a lista de carro disponivel
		Then Sera validado o endereco e o ceo