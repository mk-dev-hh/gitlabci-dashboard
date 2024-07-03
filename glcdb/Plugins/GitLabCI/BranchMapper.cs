using System.Collections.Generic;
using dvelop.Business.BranchService.Model;
using dvelop.Plugins.GitLabCI.Dto;

namespace dvelop.Plugins.GitLabCI
{
    public interface IBranchMapper
    {
        List<Branch> MapFromDtoToBusinessModel(List<BranchDto> branchDtos);
    }
    public class BranchMapper : IBranchMapper
    {
        private readonly ICommitMapper _commitMapper;

        public BranchMapper(ICommitMapper commitMapper)
        {
            this._commitMapper = commitMapper;
        }

        public List<Branch> MapFromDtoToBusinessModel(List<BranchDto> branchDtos)
        {
            var branches = new List<Branch>();
            foreach (BranchDto branchDto in branchDtos)
            {
                Branch branch = new Branch();
                branch.Name = branchDto.Name;
                branch.Merged = branchDto.Merged;
                branch.Protected = branchDto.Protected;
                branch.Default = branchDto.Default;
                branch.DevelopersCanPush = branchDto.DevelopersCanPush;
                branch.DevelopersCanMerge = branchDto.DevelopersCanMerge;
                branch.CanPush = branchDto.CanPush;
                branch.WebUrl = branchDto.WebUrl;
                branch.Commit = _commitMapper.MapFromDtoToBusinessModel(branchDto.Commit);
                branches.Add(branch);
            }

            return branches;
        }
    }
}
