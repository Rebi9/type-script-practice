export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    calcTotalFee(1000);
  };

  return (
    <div>
      <p>設定ファイルをいじる</p>
      <button onClick={onClickPractice}>実行</button>
    </div>
  );
};
