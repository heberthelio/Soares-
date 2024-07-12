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
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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



           --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
           algoritmo "Menu de Restaurante com Registro de Escolhas e Valor"

var
   opcao, opcaoSubMenu: inteiro
   escolhaPrato, escolhaBebida, escolhaSobremesa: caractere
   totalPagar: real

inicio
   escolhaPrato <- "-"
   escolhaBebida <- "-"
   escolhaSobremesa <- "-"
   totalPagar <- 0.0

   repita
      escreval("----- Menu de Restaurante -----")
      escreval("1 - Pratos")
      escreval("2 - Bebidas")
      escreval("3 - Sobremesas")
      escreval("4 - Finalizar Pedido")
      escreval("")
      escreval("Escolha uma opção: ")
      leia(opcao)

      escolha opcao
         caso 1
            escreval("----- Pratos -----")
            escreval("1 - Prato do Chef - R$ 25,00")
            escreval("2 - Prato Vegetariano - R$ 20,00")
            escreval("3 - Voltar ao menu principal")
            escreval("Escolha uma opção: ")
            leia(opcaoSubMenu)
            escolha opcaoSubMenu
               caso 1
                  escolhaPrato <- "Prato do Chef"
                  totalPagar <- totalPagar + 25.0
                  escreval("Você escolheu o Prato do Chef.")
               caso 2
                  escolhaPrato <- "Prato Vegetariano"
                  totalPagar <- totalPagar + 20.0
                  escreval("Você escolheu o Prato Vegetariano.")
               caso 3
                  // Não faz nada, apenas volta ao menu principal
               outrocaso
                  escreval("Opção inválida!")
            fimescolha

         caso 2
            escreval("----- Bebidas -----")
            escreval("1 - Refrigerante - R$ 5,00")
            escreval("2 - Suco Natural - R$ 8,00")
            escreval("3 - Voltar ao menu principal")
            escreval("Escolha uma opção: ")
            leia(opcaoSubMenu)
            escolha opcaoSubMenu
               caso 1
                  escolhaBebida <- "Refrigerante"
                  totalPagar <- totalPagar + 5.0
                  escreval("Você escolheu Refrigerante.")
               caso 2
                  escolhaBebida <- "Suco Natural"
                  totalPagar <- totalPagar + 8.0
                  escreval("Você escolheu Suco Natural.")
               caso 3
                  // Não faz nada, apenas volta ao menu principal
               outrocaso
                  escreval("Opção inválida!")
            fimescolha

         caso 3
            escreval("----- Sobremesas -----")
            escreval("1 - Sorvete - R$ 10,00")
            escreval("2 - Torta de Chocolate - R$ 15,00")
            escreval("3 - Voltar ao menu principal")
            escreval("Escolha uma opção: ")
            leia(opcaoSubMenu)
            escolha opcaoSubMenu
               caso 1
                  escolhaSobremesa <- "Sorvete"
                  totalPagar <- totalPagar + 10.0
                  escreval("Você escolheu Sorvete.")
               caso 2
                  escolhaSobremesa <- "Torta de Chocolate"
                  totalPagar <- totalPagar + 15.0
                  escreval("Você escolheu Torta de Chocolate.")
               caso 3
                  // Não faz nada, apenas volta ao menu principal
               outrocaso
                  escreval("Opção inválida!")
            fimescolha

         caso 4
            escreval("Finalizando o pedido...")
         outrocaso
            escreval("Opção inválida! Escolha uma opção válida.")
      fimescolha

      escreval("")
   ate opcao = 4

   // Exibindo o total a pagar
   escreval("Resumo do pedido:")
   escreval("Prato: ", escolhaPrato)
   escreval("Bebida: ", escolhaBebida)
   escreval("Sobremesa: ", escolhaSobremesa)
   escreval("Total a pagar: R$ ", totalPagar)

fimalgoritmo

      FimSe

Fimalgoritmo
