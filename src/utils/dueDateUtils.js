import moment from "moment";
export const normalizeDate = (date) => {
  if (!date) return null;
  const m=moment(date)
  if(!m.isValid())return null;
  return m.startOf("day")
//   const day = new Date(date);
//   if (isNaN(day)) return null;
//   day.setHours(0, 0, 0, 0);
//   return day;
};
export const getDueDateStatus = (dueDate) => {
  if (!dueDate) return null;
  const today=moment().startOf('day');
  const due=normalizeDate(dueDate);
  if(!due)return null;
  if(due.isBefore(today))return"past"
  if(due.isSame(today)) return "today"
  return "future"
//   const today = normalizeDate(new Date());
//   const due = normalizeDate(dueDate);
//   if (!due) return null;

//   if (due < today) return "past";
//   if (due.getTime() === today.getTime()) return "today";
//   return "future";
};
export const getDuDateClass = (status) => {
  switch (status) {
    case "past":
      return "due-date past";
    case "today":
      return "due-date today";
    case "future":
      return "due-date future";
    default:
      return "due-date none";
  }
};
