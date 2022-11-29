Feature: Validando JSON medium

	@medium
	Scenario: Validando medium
		Given Que seja efetuado um GET na api medium
		When For validado que os campos nao sejam null
		And For contabilizado a quantidade de usuarios dentro do campo users
		And Validado valor do campo street dentro do campo address com valor "Avenida das Oliveiras"
		And For validado o valor do campo long 15132534 e planet Earth
		Then Sera validado o valor do campo others AP401