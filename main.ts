input.onButtonPressed(Button.A, function () {
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
})
motobit.enable(MotorPower.On)
basic.forever(function () {
	
})
