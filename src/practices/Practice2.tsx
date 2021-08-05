export const Practice2 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(calcTotalFee(1000));
  };

  return (
    <div>
      <p>返却値の型指定</p>
      <button onClick={onClickPractice}>実行</button>
    </div>
  );
};
