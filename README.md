        Algoritmo "CalculoIMC"

Var

   massa, altura, IMC: Real

Inicio

      Escreval("IMC DO EDIS")

      Escreval("Calculo de IMC")

      Escreval("")

      Escreva("Informe sua massa corporal (kg): ")

      Leia(massa)

      Escreva("Informe sua altura (m): ")

      Leia(altura)

      IMC <- massa/(altura^2)

      Escreval("")

      Escreva("Seu IMC e igual a ", IMC:3:1, ". ") //Variável imc apresentada com 3 casas totais, sendo uma decimal.

      Se ((IMC >= 18.5) e (IMC < 25)) entao

         Escreval("Voce esta no seu peso ideal. Parabens!")

      senao

           Escreval ("GORDO.")

      FimSe

Fimalgoritmo
