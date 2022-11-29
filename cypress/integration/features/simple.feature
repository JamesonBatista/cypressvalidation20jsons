Feature: Simple

	Validando JSON para Teste

	@simple
	Scenario: Validando o JSON simple
		Given Que seja efetuado um GET na api do simple
		When For validado todos os campos para que nao sejam null
		Then Sera colocado na ordem o campo Order array