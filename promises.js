// 1 - SIMULAÇÃO DE FLUXO DE PEDIDOS
function validacaoPedido(pedidoValidado) {
  return new Promise((resolve, reject) => {

    console.log('Compra realizada com sucesso! Validando o pedido...')

    setTimeout(() => {
      if (pedidoValidado == true) {
        resolve('Pedido validado com sucesso! Em preparação...')
      } else {
        reject('Falha na validação do pedido.')
      }
    }, 3000)
  })
}

function preparacaoPedido(pedidoPreparado) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (pedidoPreparado == true) {
        resolve('Processo de preparação concluído com sucesso!')
      } else {
        reject('Erro! Não foi possível preparar o pedido.')
      }
    }, 3000)
  })
}

function envioPedido() {
  return new Promise((resolve) => {
    resolve('Pedido enviado, obrigado pela preferência!')
  })
}

validacaoPedido(true)
  .then((msg) => {
    console.log(msg)
    return preparacaoPedido(true)
  })
  .then((msg) => {
    console.log(msg)
    return envioPedido()
  })
  .then((msg) => {
    console.log(msg)
  })
  .catch((erro) => {
    console.log(erro)
  })

// 2 - SIMULAÇÃO DE FLUXO DE CONTRATOS
const proposalValidation = (proposal, name) => {
  return new Promise((resolve, reject) => {
    console.log(`Olá, ${name}! Vamos seguir com o fechamento do contrato?`)
    console.log('Validando a proposta...')

    setTimeout(() => {
      if (proposal) {
        resolve('Proposta validada com sucesso!')
      } else {
        reject('Infelizmente a proposta foi invalidada, tente novamente.')
      }
    }, 3000)
  })
}

const approvalContract = (approval) => {
  return new Promise((resolve, reject) => {
    console.log('Etapa de aprovação...')

    setTimeout(() => {
      if (approval) {
        resolve('Contrato aprovado! Siga com a assinatura.')
      } else {
        reject('Contrato recusado, entre em contato com a diretoria.')
      }
    }, 4000)
  })
}

const signatureContract = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Contrato assinado com sucesso.')
    }, 1500)
  })
}

const contractFlow = async() => {
  try {
    const validation = await proposalValidation(true, 'Rebeca')
    console.log(validation)
    const approval = await approvalContract(true)
    console.log(approval)
    const signature = await signatureContract()
    console.log(signature)
  }
  catch (erro) {
    console.log(erro)
  }
}

contractFlow()

// 3 - CONSUMO DE API E MANIPULAÇÃO DE DADOS
const requestUsers = async () => {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await request.json()

    filterRequest(users)
  } catch (error) {
    console.error('Erro na requisição:', error)
  }
}

const filterRequest = (json) => {
  const filteredUsers = json
    .filter((user) => user.address.city === 'South Christy') //trazendo os usuários que moram nessa cidade
    .map((user) => ({ //pegando somente o nome e email deles
      name: user.name,
      email: user.email,
    }))

  console.table(filteredUsers)
}

requestUsers()