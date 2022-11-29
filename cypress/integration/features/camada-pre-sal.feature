Feature: Validando API camada-pre-sal

	@camadaPreSal
	Scenario: Validacao JSON camada-pre-sal
		Given Que seja efetuado um GET na api camada-pre-sal
		Then sera entrado o calor do campo value "Parabéns você encontrou o valor final Usando JSONObject"