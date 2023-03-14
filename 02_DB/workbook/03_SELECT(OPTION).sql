-- 1. 
SELECT STUDENT_NAME "학생 이름", STUDENT_ADDRESS "주소지"
FROM TB_STUDENT
ORDER BY STUDENT_NAME;

-- 2.
SELECT STUDENT_NAME, STUDENT_SSN 
FROM TB_STUDENT
WHERE ABSENCE_YN = 'Y'
ORDER BY SUBSTR(STUDENT_SSN, 1, 6) DESC; 

-- 3.
SELECT STUDENT_NAME "학생이름", STUDENT_NO "학번", STUDENT_ADDRESS "거주지 주소"
FROM TB_STUDENT
WHERE (STUDENT_ADDRESS LIKE '강원도%' 
OR STUDENT_ADDRESS LIKE '경기도%')
AND STUDENT_NO NOT LIKE 'A%' -- ???????????????????
ORDER BY STUDENT_NAME;

-- 4. 
SELECT PROFESSOR_NAME, PROFESSOR_SSN 
FROM TB_PROFESSOR
JOIN TB_DEPARTMENT USING (DEPARTMENT_NO)
WHERE DEPARTMENT_NAME = '법학과'
ORDER BY SUBSTR(PROFESSOR_SSN, 1, 6);

-- 5.
SELECT STUDENT_NO, TO_CHAR(POINT, 'FM0.00') 학점
FROM TB_GRADE
WHERE TERM_NO = '200402' AND CLASS_NO = 'C3118100'
ORDER BY POINT DESC, STUDENT_NO ASC;

-- 6.
SELECT STUDENT_NO, STUDENT_NAME, DEPARTMENT_NAME
FROM TB_STUDENT 
JOIN TB_DEPARTMENT USING (DEPARTMENT_NO)
ORDER BY STUDENT_NAME;

-- 7. 
SELECT CLASS_NAME, DEPARTMENT_NAME
FROM TB_CLASS
JOIN TB_DEPARTMENT USING(DEPARTMENT_NO);

-- 8. 
SELECT CLASS_NAME, PROFESSOR_NAME
FROM TB_PROFESSOR
JOIN TB_CLASS USING (DEPARTMENT_NO)
GROUP BY CLASS_NAME, PROFESSOR_NAME;

-- 9. 
SELECT CLASS_NAME, PROFESSOR_NAME
FROM TB_PROFESSOR
JOIN TB_CLASS USING (DEPARTMENT_NO)
JOIN TB_DEPARTMENT USING (DEPARTMENT_NO)
GROUP BY CLASS_NAME, PROFESSOR_NAME
HAVING CATEGORY = '인문사회';



















