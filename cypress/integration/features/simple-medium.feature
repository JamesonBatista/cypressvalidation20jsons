Feature: Simple-medium validation

	@simpleMedium
	Scenario: Validando simple-medium
		Given Que seja efetuado um GET na api simple-medium
		Then Sera validado que nenhum campo seja null