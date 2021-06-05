export const validateInputValue = (id, password) => {
  if (id.includes(' ') || password.includes(' ')) {
    alert('ID와 PASSWORD는 공백을 포함할 수 없습니다.');
    return false;
  }

  if (id.length <= 0) {
    alert('ID를 적어주세요.');
    return false;
  }

  if (password.length < 5) {
    alert('PASSWORD는 5자리 이상이어야 합니다.');
    return false;
  }

  return true;
};

export const createDate = () => {
  const now = new Date();
  return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
};

let id = 4;
export const createId = () => {
  return id++;
};
