// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** Get Teacher from server*/
export async function getTeachers(
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/teachers', {
    method: 'GET',
    ...(options || {}),
  })
}
/** Post Teacher from server*/
export async function addTeacher(options?: { [key: string]: any }) {
  console.log(options)
  return request<API.RuleListItem>('/teachers', {
    method: 'POST',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Remove Teacher from server */
export async function removeTeacher(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/teachers/${options.id}`, {
    method: 'DELETE',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Update Teacher from server */
export async function updateTeacher(options?: { [key: string]: any }) {
  return request<API.RuleListItem>(`/teachers/${options.id}`, {
    method: 'PUT',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Get Teacher from server*/
export async function getTimeRecords(
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/timerecords', {
    method: 'GET',
    ...(options || {}),
  })
}
/** Post Teacher from server*/
export async function addTimeRecords(options?: { [key: string]: any }) {
  console.log(options)
  return request<API.RuleListItem>('/timerecords', {
    method: 'POST',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Remove Teacher from server */
export async function removeTimeRecords(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/timerecords/${options.id}`, {
    method: 'DELETE',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Update Teacher from server */
export async function updateTimeRecords(options?: { [key: string]: any }) {
  return request<API.RuleListItem>(`/timerecords/${options.id}`, {
    method: 'PUT',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Get Teacher from server*/
export async function getCourses(
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/classes', {
    method: 'GET',
    ...(options || {}),
  })
}
/** Post Teacher from server*/
export async function addCourses(options?: { [key: string]: any }) {
  console.log(options)
  return request<API.RuleListItem>('/classes', {
    method: 'POST',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Remove Teacher from server */
export async function removeCourses(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/classes/${options.id}`, {
    method: 'DELETE',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}

/** Update Teacher from server */
export async function updateCourses(options?: { [key: string]: any }) {
  return request<API.RuleListItem>(`/classes/${options.id}`, {
    method: 'PUT',
    body:JSON.stringify(options),
    headers: {
      'Content-Type':'application/json'
    },
  });
}


