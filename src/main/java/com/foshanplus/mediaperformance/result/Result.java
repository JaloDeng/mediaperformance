package com.foshanplus.mediaperformance.result;

/**
 * @author Jalo Deng
 * @email 651379728@qq.com
 * @date 2019-07-08 14:37
 */

public class Result<T> {

	private T data;
	
	private String message;
	
	private Long page;
	
	private Long size;
	
	private Boolean success;
	
	private Long total;
	
	private Long totalPage;
	
	public Result() {}

	public Result(T data, Long page, Long size, Long total, Long totalPage) {
		this.data = data;
		this.page = page;
		this.size = size;
		this.success = true;
		this.total = total;
		this.totalPage = totalPage;
	}
	
	public Result(String message, Boolean success) {
		this.message = message;
		this.success = success;
	}
	
	public Result(T data, String message, Long page, Long size, Boolean success, Long total, Long totalPage) {
		this.data = data;
		this.message = message;
		this.page = page;
		this.size = size;
		this.success = success;
		this.total = total;
		this.totalPage = totalPage;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getPage() {
		return page;
	}

	public void setPage(Long page) {
		this.page = page;
	}

	public Long getSize() {
		return size;
	}

	public void setSize(Long size) {
		this.size = size;
	}

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

	public Long getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(Long totalPage) {
		this.totalPage = totalPage;
	}
	
}
