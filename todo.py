tasks = []

while True:
    print("\n1:追加 2:表示 3:削除 4:終了")
    choice = input("選択: ")

    if choice == "1":
        task = input("やること: ")
        tasks.append(task)

    elif choice == "2":
        for i, t in enumerate(tasks):
            print(f"{i}: {t}")

    elif choice == "3":
        num = int(input("削除番号: "))
        tasks.pop(num)

    elif choice == "4":
        break
        