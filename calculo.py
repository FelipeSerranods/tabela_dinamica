tarifa = 0.54
potencia_eletrica = float(input('Informe a potencia eletrica da maquina: '))
horas_usadas = int(input('Horas totais que a maquina foi utilizada no mes: '))
consumo_mensal = (potencia_eletrica * horas_usadas * 30)/1000 
custo_mensal = tarifa * consumo_mensal
print(custo_mensal)