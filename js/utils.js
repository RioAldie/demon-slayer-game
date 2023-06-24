function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Seri'
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Yuki Menang'
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Muzan Menang'
  }
  document.getElementById('credit').style.display = 'flex'
}

let timer = 100
let timerId
// let audio = document.getElementById('audio')

function decreaseTimer() {
  if (timer > 0) {
    //audio.play()
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}
