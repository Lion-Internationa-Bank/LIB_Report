using System;
using System.Threading.Tasks;
using LIB_Report.DAL.DTO;
using LIB_Report.Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LIB_Report.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoockUpController : ControllerBase
    {
        private readonly ILoockUpService _loockUpService;

        public LoockUpController(ILoockUpService loockUpService)
        {
            _loockUpService = loockUpService;
        }

        [HttpGet("GetBusinessUnit/{CategoryType}")]
        public async Task<IActionResult> GetBusinessUnit(int CategoryType)
        {
            try
            {
                var result = await _loockUpService.GetBusinessUnit(CategoryType);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet("GetJobsTitle")]
        public async Task<IActionResult> GetJobsTitle()
        {
            try
            {
                var result = await _loockUpService.GetJobsTitle();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        [HttpGet("SearchEmployee")]
        public async Task<IActionResult> SearchEmployee([FromQuery] SearchEmployeeParameters param)
        {
            try
            {
                var result = await _loockUpService.SearchEmployee(param);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
