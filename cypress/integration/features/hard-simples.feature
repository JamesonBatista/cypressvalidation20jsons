Feature: Validando api hard-simples

	@hardSimples
	Scenario: Validacao hard-simples
		Given Que seja efetuado um GET na api hard-simples
		When For impresso a apresentacao do usuario e o caro disponivel pela cor
		Then Sera validado endereco da loja