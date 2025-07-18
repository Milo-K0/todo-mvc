const LOCAL_KEY = "todomvc"
/**
 * 生成一个唯一编号: 时间戳 + 四位随机数
 */
export function generateId() {
  return Date.now() + Math.random().toString(16).substring(2,4);
}
/**
 * 获取目前所有任务
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KEY)
  if(result) {
    return JSON.parse(result)
  }
  return []
}
/**
 * 保留所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KEY,JSON.stringify(todos))
}

export function filter(todos,visibility = 'all') {
  if(visibility === 'all') {
    return todos;
  }else if(visibility === 'active') {
    return todos.filter(item => !item.completed);
  }else if(visibility === 'completed') {
    return todos.filter(item => item.completed);
  }else {
    throw new Error('invalid visibility value!!!')
  }
}