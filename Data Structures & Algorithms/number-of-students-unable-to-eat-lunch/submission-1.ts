class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let studentsLeft = students.length;
        const counts = {
            0: 0,
            1: 0
        }
        for (let student of students) {
            counts[student]++;
        }
        for (let sandwich of sandwiches) {
            if (counts[sandwich] > 0) {
                studentsLeft--;
                counts[sandwich]--;
            } else {
                return studentsLeft;
            }
        }
        return studentsLeft;
    }
}
