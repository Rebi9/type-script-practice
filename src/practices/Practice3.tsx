export const Practice3 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = calcTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>変数の型指定</p>
      <button onClick={onClickPractice}>実行</button>
    </div>
  );
};
