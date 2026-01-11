num1 = int(input("첫 번째 숫자를 입력하세요: "))
op = input("연산자를 입력하세요 (+, -, *, /): ")
num2 = int(input("두 번째 숫자를 입력하세요: "))

def calculate(a, b, op):
  if op == '+':
    return a + b
  elif op == '-':
    return a - b
  elif op == '*':
    return a * b
  elif op == '/':
    if b != 0:
      return "0으로 나눌 수 없습니다."
    return a / b
  else:
      return "잘못된 연산자입니다."

result = calculate(num1, num2, op)
print(f"결과:", result)