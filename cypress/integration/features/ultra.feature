Feature: Validando JSON ultra

	@ultra
	Scenario: Validando complex
		Given Que seja efetuado um GET na api ultra
		When For criado um array fake de users
		And For criado um array fake de produtos
		Then Sera criado array fake de vips