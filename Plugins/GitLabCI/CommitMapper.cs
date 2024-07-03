using System.Collections.Generic;
using dvelop.Business.CommitService.Model;
using dvelop.Plugins.GitLabCI.Dto;

namespace dvelop.Plugins.GitLabCI
{
    public interface ICommitMapper
    {
        Commit MapFromDtoToBusinessModel(CommitDto commitDto);
    }

    public class CommitMapper : ICommitMapper
    {
        public Commit MapFromDtoToBusinessModel(CommitDto commitDto)
        {
            Commit commit = new Commit();
            commit.Id = commitDto.Id;
            commit.ShortId = commitDto.ShortId;
            commit.Title = commitDto.Title;
            commit.AuthorName = commitDto.AuthorName;
            commit.AuthorEmail = commitDto.AuthorEmail;
            commit.AuthoredDate = commitDto.AuthoredDate;
            commit.CommitterName = commitDto.CommitterName;
            commit.CommitterEmail = commitDto.CommitterEmail;
            commit.CommittedDate = commitDto.CommittedDate;
            commit.CreatedAt = commitDto.CreatedAt;
            commit.Message = commitDto.Message;
            commit.ParentIds = commitDto.ParentIds;
            commit.WebUrl = commitDto.WebUrl;

            return commit;
        }
    }
}
